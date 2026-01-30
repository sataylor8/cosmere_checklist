import type { BookName } from "./BookData";
import Elantris_Cover from "./assets/Elantris_Cover.jpg";
import TheHopeOfElantris_Cover from "./assets/TheHopeOfElantris_Cover.jpg";
import TheEmporersSoul_Cover from "./assets/TheEmporersSoul_Cover.jpg";
import TheFinalEmpire_Cover from "./assets/TheFinalEmpire_Cover.jpg";
import TheWellOfAscension_Cover from "./assets/TheWellOfAscension_Cover.jpg";
import TheHeroOfAges_Cover from "./assets/TheHeroOfAges_Cover.jpg";
import MistbornSecretHistory_Cover from "./assets/MistbornSecretHistory_Cover.jpg";
import TheAlloyOfLaw_Cover from "./assets/TheAlloyOfLaw_Cover.jpg";
import TheShadowsOfSelf_Cover from "./assets/TheShadowsOfSelf_Cover.jpg";
import TheBandsOfMourning_Cover from "./assets/TheBandsOfMourning_Cover.jpg";
import TheLostMetal_Cover from "./assets/TheLostMetal_Cover.jpg";
import Warbreaker_Cover from "./assets/Warbreaker_Cover.jpeg";
import TheWayOfKings_Cover from "./assets/TheWayOfKings_Cover.png";
import WordsOfRadiance_Cover from "./assets/WordsOfRadiance_Cover.jpg";
import EdgeDancer_Cover from "./assets/EdgeDancer_Cover.jpg";
import Oathbringer_Cover from "./assets/Oathbringer_Cover.jpg";
import Dawnshard_Cover from "./assets/Dawnshard_Cover.jpg";
import RhythmOfWar_Cover from "./assets/RhythmOfWar_Cover.jpg";
import WindAndTruth_Cover from "./assets/WindAndTruth_Cover.jpg";
import WhiteSandV1_Cover from "./assets/WhiteSandV1_Cover.jpg";
import WhiteSandV2_Cover from "./assets/WhiteSandV2_Cover.jpg";
import WhiteSandV3_Cover from "./assets/WhiteSandV3_Cover.jpg";
import ShadowsForSilence_Cover from "./assets/ShadowsForSilence_Cover.jpg";
import TressOfTheEmeraldSea_Cover from "./assets/TressOfTheEmeraldSea_Cover.jpg";
import YumiAndTheNightmarePainter_Cover from "./assets/YumiAndTheNightmarePainter_Cover.jpg";
import TheSunlitMan_Cover from "./assets/TheSunlitMan_Cover.jpg";
import IslesOfTheEmberdark_Cover from "./assets/IslesOfTheEmberdark_Cover.png";

export function GetImage(bookKey: BookName) {
    switch (bookKey) {
        case "Elantris":
            return Elantris_Cover
        case "The Hope of Elantris":
            return TheHopeOfElantris_Cover;
        case "The Emperor's Soul":
            return TheEmporersSoul_Cover;
        case "The Final Empire":
            return TheFinalEmpire_Cover;
        case "The Well of Ascension":
            return TheWellOfAscension_Cover;
        case "The Hero of Ages":
            return TheHeroOfAges_Cover;
        case "Mistborn: Secret History":
            return MistbornSecretHistory_Cover;
        case "The Alloy of Law":
            return TheAlloyOfLaw_Cover;
        case "The Shadows of Self":
            return TheShadowsOfSelf_Cover;
        case "The Bands of Mourning":
            return TheBandsOfMourning_Cover;
        case "The Lost Metal":
            return TheLostMetal_Cover;
        case "Warbreaker":
            return Warbreaker_Cover;
        case "The Way of Kings":
            return TheWayOfKings_Cover;
        case "Words of Radiance":
            return WordsOfRadiance_Cover;
        case "Edgedancer":
            return EdgeDancer_Cover;
        case "Oathbringer":
            return Oathbringer_Cover;
        case "Dawnshard":
            return Dawnshard_Cover;
        case "Rhythm of War":
            return RhythmOfWar_Cover;
        case "Wind and Truth":
            return WindAndTruth_Cover;
        case "White Sand Volume 1":
            return WhiteSandV1_Cover;
        case "White Sand Volume 2":
            return WhiteSandV2_Cover;
        case "White Sand Volume 3":
            return WhiteSandV3_Cover;
        case "Shadows for Silence in the Forest of Hell":
            return ShadowsForSilence_Cover;
        case "Tress of the Emerald Sea":
            return TressOfTheEmeraldSea_Cover;
        case "Yumi and The Nightmare Painter":
            return YumiAndTheNightmarePainter_Cover;
        case "The Sunlit Man":
            return TheSunlitMan_Cover;
        case "Isles of the Emberdark":
            return IslesOfTheEmberdark_Cover
    }
}