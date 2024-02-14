const PSYS = {};

/*
* Configuration data for abilities
*
* @typedef {object} AbilityConfiguration
* @property {string} label
* @property {string} abberviation
* @property {string} fullKey
* @property {string} [reference]
* @property {string} [type]
* @property {Object<string, number|string} [defaults]
*/

/*
* The set of Ability Scores used within the system.
* @enum {AbilityConfiguration}
*/
PSYS.abilities = {
    str: {
        label: "PSYS.AbilityStr",
        abberviation: "PSYS.AbilityStrAbbr",
        type: "physical",
        fullKey: "strength",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalEntryPage.Page_X"
    },
    dex: {
        label: "PSYS.AbilityDex",
        abberviation: "PSYS.AbilityDexAbbr",
        type: "physical",
        fullKey: "dexterity",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalEntryPage.Page_X"
    },
    con: {
        label: "PSYS.AbilityCon",
        abberviation: "PSYS.AbilityConAbbr",
        type: "physical",
        fullKey: "constitution",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalEntryPage.Page_X"
    },
    int: {
        label: "PSYS.AbilityInt",
        abberviation: "PSYS.AbilityIntAbbr",
        type: "mental",
        fullKey: "intelligence",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalEntryPage.Page_X"
    },
    wis: {
        label: "PSYS.AbilityWis",
        abberviation: "PSYS.AbilityWisAbbr",
        type: "mental",
        fullKey: "wisdom",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalEntryPage.Page_X"
    },
    cha: {
        label: "PSYS.AbilityCha",
        abberviation: "PSYS.AbilityChaAbbr",
        type: "mental",
        fullKey: "charisma",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalEntryPage.Page_X"
    }
};
preLocalize("abilities", { keys: ["label", "abbreviation"] });

/*
* Configure which ability score is used as the default modifier for initiative rolls.
* @type {string}
*
*/

PSYS.iniativeAbility = "dex";

/*
* Configure which ability score is used when calculating hit points per level.
* @type {string}
*
*/
PSYS.hitPointsAbility = "con";