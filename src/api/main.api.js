import ethersApi from './ethers.api';

import { AUTOPET_CONTRACT, MAIN_CONTRACT } from './common/constants';
import { MAIN_ABI } from 'data/abi/main.abi';
import { AUTOPET_ABI } from 'data/abi/autopet.abi';

const contract = ethersApi.makeContract(MAIN_CONTRACT, MAIN_ABI, 'polygon');
const autopetContract = ethersApi.makeContract(AUTOPET_CONTRACT, AUTOPET_ABI, 'polygon')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    isPetApproved(address) {
        return autopetContract.operator().then(operator => (
            contract.isPetOperatorForAll(address, operator)
        ));
    },

    async approvePet(isApproved) {
        const writeContract = ethersApi.makeContractWithSigner(MAIN_CONTRACT, MAIN_ABI);
        const operator = await autopetContract.operator();
        const transaction = await writeContract.setPetOperatorForAll(operator, isApproved);

        return ethersApi.waitForTransaction(transaction.hash, 'polygon').then(response => (
            Boolean(response.status)
        ));
    },

    async getAvailableSkillPoints(tokenId) {
        try {
            return await contract.availableSkillPoints(tokenId)
                .then((response) => {
                    return ethersApi.formatBigNumber(response)
                });
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    async getInventoryByAddress(address) {
        try {
            let contractResponse;

            await contract.itemBalances(address.toLowerCase())
                .then((response) => {
                    const collection = response.map((item)=> {
                        let inner = item.map((i) => ethersApi.formatBigNumber(i));
                        return { itemId: inner[0], balance: inner[1] }
                    });

                    contractResponse = {items: collection, owner: address};
                });

            return contractResponse;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    async previewAavegotchi(haunt, collateral, traits, wearables) {
        try {
            return contract.previewAavegotchi(haunt, collateral, traits, wearables);
        } catch (error) {
            console.log(error);
            return null;
        }
    },
}