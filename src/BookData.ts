export type SystemName = "Sel" | "Scadrial" | "Nalthis" | "Roshar" | "Taldain" | "Threnody" | "Lumar" | "Monaster" | "Cantico" | "Drominad";
export const SystemNames: SystemName[] = ["Sel", "Scadrial", "Nalthis", "Roshar", "Taldain", "Threnody", "Lumar", "Monaster", "Cantico", "Drominad"];
export type BookName = "Elantris" |
    "The Hope of Elantris" |
    "The Emperor's Soul" |
    "The Final Empire" |
    "Elantris" |
    "The Hope of Elantris" |
    "The Emperor's Soul" |
    "The Final Empire" |
    "The Well of Ascension" |
    "The Hero of Ages" |
    "Mistborn: Secret History" |
    "The Alloy of Law" |
    "The Shadows of Self" |
    "The Bands of Mourning" |
    "The Lost Metal" |
    "Warbreaker" |
    "The Way of Kings" |
    "Words of Radiance" |
    "Edgedancer" |
    "Oathbringer" |
    "Dawnshard" |
    "Rhythm of War" |
    "Wind and Truth" |
    "White Sand Volume 1" |
    "White Sand Volume 2" |
    "White Sand Volume 3" |
    "Shadows for Silence in the Forest of Hell" |
    "Tress of the Emerald Sea" |
    "Yumi and The Nightmare Painter" |
    "The Sunlit Man" |
    "Isles of the Emberdark" |
    "The Well of Ascension" |
    "The Hero of Ages" |
    "Mistborn: Secret History" |
    "The Alloy of Law" |
    "The Shadows of Self" |
    "The Bands of Mourning" |
    "The Lost Metal" |
    "Warbreaker" |
    "The Way of Kings" |
    "Words of Radiance" |
    "Edgedancer" |
    "Oathbringer" |
    "Dawnshard" |
    "Rhythm of War" |
    "Wind and Truth" |
    "White Sand Volume 1" |
    "White Sand Volume 2" |
    "White Sand Volume 3" |
    "Shadows for Silence in the Forest of Hell" |
    "Tress of the Emerald Sea" |
    "Yumi and The Nightmare Painter" |
    "The Sunlit Man" |
    "Isles of the Emberdark";
export const BookNames: Record<SystemName, { books: BookName[] }> = {
    "Sel": {
        books: [
            "Elantris",
            "The Hope of Elantris",
            "The Emperor's Soul"
        ]
    },
    "Scadrial": {
        books: [
            "The Final Empire",
            "The Well of Ascension",
            "The Hero of Ages",
            "Mistborn: Secret History",
            "The Alloy of Law",
            "The Shadows of Self",
            "The Bands of Mourning",
            "The Lost Metal"
        ]
    },
    "Nalthis": {
        books: [
            "Warbreaker"
        ]
    },
    "Roshar": {
        books: [
            "The Way of Kings",
            "Words of Radiance",
            "Edgedancer",
            "Oathbringer",
            "Dawnshard",
            "Rhythm of War",
            "Wind and Truth"
        ]
    },
    "Taldain": {
        books: [
            "White Sand Volume 1",
            "White Sand Volume 2",
            "White Sand Volume 3"
        ]
    },
    "Threnody": {
        books: [
            "Shadows for Silence in the Forest of Hell"
        ]
    },
    "Lumar": {
        books: [
            "Tress of the Emerald Sea"
        ]
    },
    "Monaster": {
        books: [
            "Yumi and The Nightmare Painter"
        ]
    },
    "Cantico": {
        books: [
            "The Sunlit Man"
        ]
    },
    "Drominad ": {
        books: [
            "Isles of the Emberdark"
        ]
    }
}

export interface Book {
    minutes: number;
    image: string;
};

export interface SystemStatus {
    books: Partial<Record<BookName, number>>;
}

export interface System {
    books: Partial<Record<BookName, Book>>;
};

export type BookDataType = Record<SystemName, System>;
export type BookStatusType = Record<SystemName, SystemStatus>;

const BookData: BookDataType = {
    "Sel": {
        books: {
            "Elantris": {
                minutes: 1710,
                image: "./assets/Elantris_Cover.jpg",
            },
            "The Hope of Elantris": {
                minutes: 38,
                image: "./assets/TheHopeOfElantris_Cover.jpg",
            },
            "The Emperor's Soul": {
                minutes: 235,
                image: "./assets/TheEmporersSoul_Cover.jpg",
            }
        }
    },
    "Scadrial": {
        books: {
            "The Final Empire": {
                minutes: 1479,
                image: "./assets/TheFinalEmpire_Cover.jpg",
            },
            "The Well of Ascension": {
                minutes: 1740,
                image: "./assets/TheWellOfAscension_Cover.jpg",
            },
            "The Hero of Ages": {
                minutes: 1645,
                image: "./assets/TheHeroOfAges_Cover.jpg",
            },
            "Mistborn: Secret History": {
                minutes: 358,
                image: "./assets/MistbornSecretHistory_Cover.jpg",
            },
            "The Alloy of Law": {
                minutes: 648,
                image: "./assets/TheAlloyOfLaw_Cover.jpg",
            },
            "The Shadows of Self": {
                minutes: 757,
                image: "./assets/TheShadowsOfSelf_Cover.jpg",
            },
            "The Bands of Mourning": {
                minutes: 881,
                image: "./assets/TheBandsOfMourning_Cover.jpg",
            },
            "The Lost Metal": {
                minutes: 1126,
                image: "./assets/TheLostMetal_Cover.jpg",
            }
        }
    },
    "Nalthis": {
        books: {
            "Warbreaker": {
                minutes: 1496,
                image: "./assets/Warbreaker_Cover.jpeg",
            }
        }
    },
    "Roshar": {
        books: {
            "The Way of Kings": {
                minutes: 2730,
                image: "./assets/TheWayOfKings_Cover.png",
            },
            "Words of Radiance": {
                minutes: 2895,
                image: "./assets/WordsOfRadiance_Cover.jpg",
            },
            "Edgedancer": {
                minutes: 384,
                image: "./assets/EdgeDancer_Cover.jpg",
            },
            "Oathbringer": {
                minutes: 3305,
                image: "./assets/Oathbringer_Cover.jpg",
            },
            "Dawnshard": {
                minutes: 425,
                image: "./assets/Dawnshard_Cover.jpg",
            },
            "Rhythm of War": {
                minutes: 3446,
                image: "./assets/RhythmOfWar_Cover.jpg",
            },
            "Wind and Truth": {
                minutes: 3768,
                image: "./assets/WindAndTruth_Cover.jpg",
            }
        }
    },
    "Taldain": {
        books: {
            "White Sand Volume 1": {
                minutes: 323,
                image: "./assets/WhiteSandV1_Cover.jpg",
            },
            "White Sand Volume 2": {
                minutes: 311,
                image: "./assets/WhiteSandV2_Cover.jpg",
            },
            "White Sand Volume 3": {
                minutes: 305,
                image: "./assets/WhiteSandV3_Cover.jpg",
            }
        }
    },
    "Threnody": {
        books: {
            "Shadows for Silence in the Forest of Hell": {
                minutes: 127,
                image: "./assets/ShadowsForSilence_Cover.jpg",
            }
        }
    },
    "Lumar": {
        books: {
            "Tress of the Emerald Sea": {
                minutes: 747,
                image: "./assets/TressOfTheEmeraldSea_Cover.jpg",
            }
        }
    },
    "Monaster": {
        books: {
            "Yumi and The Nightmare Painter": {
                minutes: 883,
                image: "./assets/YumiAndTheNightmarePainter_Cover.jpg",
            }
        }
    },
    "Cantico": {
        books: {
            "The Sunlit Man": {
                minutes: 671,
                image: "./assets/TheSunlitMan_Cover.jpg",
            }
        }
    },
    "Drominad": {
        books: {
            "Isles of the Emberdark": {
                minutes: 1013,
                image: "./assets/IslesOfTheEmberdark_Cover.png",
            }
        }
    }
};

export const InitialBookStatus: BookStatusType = {
    "Sel": {
        books: {
            "Elantris": 0,
            "The Hope of Elantris": 0,
            "The Emperor's Soul": 0
        }
    },
    "Scadrial": {
        books: {
            "The Final Empire": 0,
            "The Well of Ascension": 0,
            "The Hero of Ages": 0,
            "Mistborn: Secret History": 0,
            "The Alloy of Law": 0,
            "The Shadows of Self": 0,
            "The Bands of Mourning": 0,
            "The Lost Metal": 0
        }
    },
    "Nalthis": {
        books: {
            "Warbreaker": 0
        }
    },
    "Roshar": {
        books: {
            "The Way of Kings": 0,
            "Words of Radiance": 0,
            "Edgedancer": 0,
            "Oathbringer": 0,
            "Dawnshard": 0,
            "Rhythm of War": 0,
            "Wind and Truth": 0
        }
    },
    "Taldain": {
        books: {
            "White Sand Volume 1": 0,
            "White Sand Volume 2": 0,
            "White Sand Volume 3": 0
        }
    },
    "Threnody": {
        books: {
            "Shadows for Silence in the Forest of Hell": 0
        }
    },
    "Lumar": {
        books: {
            "Tress of the Emerald Sea": 0
        }
    },
    "Monaster": {
        books: {
            "Yumi and The Nightmare Painter": 0
        }
    },
    "Cantico": {
        books: {
            "The Sunlit Man": 0
        }
    },
    "Drominad": {
        books: {
            "Isles of the Emberdark": 0
        }
    }
};

export default BookData;