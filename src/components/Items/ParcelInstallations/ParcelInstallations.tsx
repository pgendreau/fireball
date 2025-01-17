import { Skeleton } from '@mui/material';

import { InstallationTypeNames } from 'shared/constants';
import { CustomTooltip } from 'components/custom/CustomTooltip';
import { InstallationsUtils } from 'utils';

import { InstallationImage } from '../Installation/InstallationImage';
import { styles } from './styles';

// const dataFormat = {
//     days: { key: 'dd', value: 'd', shownIfZero: false },
//     hours: { key: 'hh', value: 'h', shownIfZero: false },
//     minutes: { key: 'mm', value: 'm', shownIfZero: false }
// };

export function ParcelInstallations({ parcel, size }: { parcel: any, size?: any }) {
    const classes = styles();

    if (parcel.installations.loading) {
        return <div className={classes.placeholder}>
            <Skeleton
                className={classes.placeholderInner}
                variant='rectangular'
                width='100%'
                height={30}
            />
        </div>;
    }

    if (!parcel.installations.length) {
        return <div className={classes.container}>
            <div className={classes.placeholderWarning}>
                no installations
            </div>
        </div>;
    }

    return (
        <div className={classes.container}>

            { parcel.installations.map((installation: any, index: number) => {
                const metadata = InstallationsUtils.getMetadataById(installation.id);
                const isAltar = metadata.type === InstallationTypeNames.Altar;

                return (
                    <div
                        className={classes.installation}
                        style={{ width: size ? `${size}px` : '40px', height: size ? `${size}px` : '40px' }}
                        key={index}
                    >
                        { isAltar && (
                            <div className={classes.installationLevel}>
                                {metadata.level}
                            </div>
                        )}

                        <CustomTooltip
                            title={
                                <div>
                                    <div className={classes.inner}>
                                        {metadata.type}: <span>{metadata.name}</span>
                                    </div>

                                    { isAltar && (
                                        <div className={classes.row}>
                                            <div className={classes.inner}>
                                                lvl: <span>{metadata.level}</span>
                                            </div>
                                            <div className={classes.inner}>
                                                cd: <span>{metadata.cooldown}h</span>
                                            </div>
                                            <div className={classes.inner}>
                                                rate: <span>{100 - (metadata.spillRate / 100)}%</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                            placement='top'
                            arrow={true}
                        >
                            <div className={classes.installationImage}>
                                <InstallationImage id={installation.id} />
                            </div>
                        </CustomTooltip>


                        {/* { parcel.upgrading && (
                            <div className={classes.upgrade}>
                                <span>upg:</span>

                                <div className={classes.countdown}>
                                    <Countdown
                                        targetDate={DateTime.fromSeconds(parcel.upgrading.timestamp).toMillis()}
                                        shortFormat={dataFormat}
                                        replacementComponent={<span className={classes.ready}>Ready!</span>}
                                    />
                                </div>
                            </div>
                        )} */}
                    </div>
                );
            })}
        </div>
    );
}
