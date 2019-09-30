/* @flow */

import { getButtonConfig } from '../../src/button/config';
import { BUTTON_LABEL, BUTTON_SIZE, FUNDING, CARD } from '../../src/constants';

const RESPONSIVE_WIDTHS = [ 92, 144, 212, /* 345, */ 460, 670 ];

type ButtonConfig = {|
    filename? : string,
    userAgent? : string,
    container? : {
        width? : number
    },
    button : {
        locale? : string,
        style? : {
            color? : string,
            size? : string,
            shape? : string,
            label? : string,
            installmentperiod? : number
        },
        funding? : {
            allowed? : $ReadOnlyArray<string>,
            disallowed? : $ReadOnlyArray<string>
        }
    }
|};

export const buttonConfigs : Array<ButtonConfig> = [];

buttonConfigs.push({
    button: {}
});

for (let label of Object.keys(BUTTON_LABEL)) {
    label = BUTTON_LABEL[label];
    if (label === BUTTON_LABEL.INSTALLMENT) {
        continue;
    }

    if (getButtonConfig(label, 'allowPrimary')) {
        buttonConfigs.push({
            button: {
                style: {
                    label
                }
            }
        });

        for (const size of getButtonConfig(label, 'sizes')) {

            if (size === BUTTON_SIZE.RESPONSIVE) {
                for (const width of RESPONSIVE_WIDTHS) {
                    buttonConfigs.push({
                        container: {
                            width
                        },
                        button: {
                            style: {
                                label,
                                size
                            }
                        }
                    });
                }
            } else {
                buttonConfigs.push({
                    button: {
                        style: {
                            label,
                            size
                        }
                    }
                });
            }
        }

        for (const color of getButtonConfig(label, 'colors')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        color
                    }
                }
            });
        }

        for (const shape of getButtonConfig(label, 'shapes')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        shape
                    }
                }
            });
        }

        if (getButtonConfig(label, 'allowFundingIcons')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        fundingicons: true
                    }
                }
            });

            buttonConfigs.push({
                button: {
                    locale: 'pt_BR',
                    style:  {
                        label,
                        fundingicons: true
                    }
                }
            });

            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        fundingicons: true
                    },
                    funding: {
                        disallowed: [ CARD.AMEX ]
                    }
                }
            });
        }

        if (getButtonConfig(label, 'allowUnbranded')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        branding: true
                    }
                }
            });
        }

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    tagline: false
                }
            }
        });

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    maxbuttons: 1
                }
            }
        });

        for (const shape of getButtonConfig(label, 'shapes')) {

            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        shape,
                        height: 45,
                        size:   BUTTON_SIZE.SMALL
                    }
                }
            });
        }

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    height: 45,
                    size:   BUTTON_SIZE.SMALL
                },
                funding: {
                    allowed: [ FUNDING.CREDIT ]
                }
            }
        });

        buttonConfigs.push({
            container: {
                width: 340
            },
            button: {
                style: {
                    label,
                    height: 44,
                    size:   BUTTON_SIZE.RESPONSIVE
                }
            }
        });

        buttonConfigs.push({
            userAgent: 'iphone6',
            container: {
                width: 340
            },
            button: {
                style: {
                    label,
                    height: 44,
                    size:   BUTTON_SIZE.RESPONSIVE
                },
                funding: {
                    allowed: [ FUNDING.VENMO ]
                }
            }
        });
    }
}

for (const color of getButtonConfig('paypal', 'colors')) {

    buttonConfigs.push({
        button: {
            style: {
                color,
                layout: 'horizontal'
            },
            funding: {
                allowed: [ FUNDING.CREDIT ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout: 'horizontal'
            },
            funding: {
                allowed: [ FUNDING.VENMO ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout: 'horizontal'
            },
            funding: {
                allowed: [ FUNDING.VENMO ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.VENMO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.VENMO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'pt_BR',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.BOLETO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'de_DE',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.ELV, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'de_DE',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.ELV, FUNDING.GIROPAY, FUNDING.SOFORT ]
            }
        }
    });


    buttonConfigs.push({
        button: {
            locale: 'nl_NL',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.IDEAL, FUNDING.SOFORT, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_BE',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.BANCONTACT, FUNDING.SOFORT ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_AT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.EPS, FUNDING.SOFORT ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_AT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed:    [ FUNDING.EPS, FUNDING.SOFORT ],
                disallowed: [ FUNDING.ELV ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_GB',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.CARD, FUNDING.TRUSTLY ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_IT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.SOFORT, FUNDING.MYBANK, FUNDING.TRUSTLY ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_PL',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.BLIK, FUNDING.P24 ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_FI',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.TRUSTLY ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_LT',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.MAXIMA ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'en_MX',
            commit: true,
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.OXXO ]
            }
        }
    });

    // buttonConfigs.push({
    //     button: {
    //         locale: 'zh_CN',
    //         commit: true,
    //         style:  {
    //             layout:     'vertical'
    //         }
    //     }
    // });
}


/** INSTALLMENT BUTTON CONFIG **/

buttonConfigs.push({
    button: {
        locale: 'pt_BR',
        style:  {
            label: 'installment'
        }
    }
});

buttonConfigs.push({
    button: {
        locale: 'pt_BR',
        style:  {
            label:             'installment',
            installmentperiod: 4
        }
    }
});

buttonConfigs.push({
    button: {
        locale: 'pt_BR',
        style:  {
            layout: 'horizontal'
        },
        funding: {
            allowed: [ FUNDING.ITAU ]
        }
    }
});

buttonConfigs.push({
    button: {
        locale: 'pt_BR',
        style:  {
            layout: 'vertical'
        },
        funding: {
            allowed: [ FUNDING.ITAU ]
        }
    }
});
