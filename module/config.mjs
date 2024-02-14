const PSYS = {};

/**
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

/**
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

/**
 * Configure which ability score is used as the default modifier for initiative rolls.
 * @type {string}
 *
 */

PSYS.iniativeAbility = "dex";

/**
* Configure which ability score is used when calculating hit points per level.
* @type {string}
*
*/
PSYS.hitPointsAbility = "con";

/* -------------------------------------------- */

/**
 * Configuration data for skills.
 *
 * @typedef {object} SkillConfiguration
 * @property {string} label        Localized label.
 * @property {string} ability      Key for the default ability used by this skill.
 * @property {string} fullKey      Fully written key used as alternate for enrichers.
 * @property {string} [reference]  Reference to a rule page describing this skill.
 */

/**
 * The set of skill which can be trained with their default ability scores.
 * @enum {SkillConfiguration}
 */
PSYS.skills = {
    // Strenght
    ath: {
        label: "PSYS.SkillAtl",
        ability: "str",
        fullKey: "athletics",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    // Dexterity
    acr: {
        label: "PSYS.SkillAcr",
        ability: "dex",
        fullKey: "acrobatics",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    ste: {
        label: "PSYS.SkillSte",
        ability: "dex",
        fullKey: "stealth",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    slt: {
        label: "PSYS.SkillSlt",
        ability: "dex",
        fullKey: "sleightOfHand",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    the: {
        label: "PSYS.SkillThe",
        ability: "dex",
        fullKey: "theft",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    rfl: {
        label: "PSYS.SkillRfl",
        ability: "dex",
        fullKey: "reflex",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    dri: {
        label: "PSYS.SkillDri",
        ability: "dex",
        fullKey: "drive",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    // Constitution
    for: {
        label: "PSYS.SkillFor",
        ability: "con",
        fullKey: "fortitude",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    cct: {
        label: "PSYS.SkillCct",
        ability: "con",
        fullKey: "concentration",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    // Intelligence
    arc: {
        label: "PSYS.SkillArc",
        ability: "int",
        fullKey: "arcanism",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    oct: {
        label: "PSYS.SkillOct",
        ability: "int",
        fullKey: "ocultism",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    his: {
        label: "PSYS.SkillHis",
        ability: "int",
        fullKey: "history",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    nat: {
        label: "PSYS.SkillNat",
        ability: "int",
        fullKey: "nature",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    inv: {
        label: "PSYS.SkillInv",
        ability: "int",
        fullKey: "investigation",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    rel: {
        label: "PSYS.SkillRel",
        ability: "int",
        fullKey: "religion",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    tec: {
        label: "PSYS.SkillTec",
        ability: "int",
        fullKey: "technology",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    pla: {
        label: "PSYS.SkillPla",
        ability: "int",
        fullKey: "planes",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    // Wisdom
    anh: {
        label: "PSYS.SkillAnh",
        ability: "wis",
        fullKey: "animalHandling",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    ins: {
        label: "PSYS.SkillIns",
        ability: "wis",
        fullKey: "insight",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    med: {
        label: "PSYS.SkillMed",
        ability: "wis",
        fullKey: "medicine",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    pcp: {
        label: "PSYS.SkillPcp",
        ability: "wis",
        fullKey: "perception",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    sur: {
        label: "PSYS.SkillSur",
        ability: "wis",
        fullKey: "survival",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    // Charism
    per: {
        label: "PSYS.SkillPer",
        ability: "cha",
        fullKey: "performance",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    dec: {
        label: "PSYS.SkillDec",
        ability: "cha",
        fullKey: "deception",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    itm: {
        label: "PSYS.SkillItm",
        ability: "cha",
        fullKey: "intimidation",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    prs: {
        label: "PSYS.SkillPrs",
        ability: "cha",
        fullKey: "persuasion",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    },
    fli: {
        label: "PSYS.SkillFli",
        ability: "cha",
        fullKey: "flirt",
        reference: "Compendium.psys.rules.JournalEntry.Entry_X.JournalPage.Page_X",
        icon: "directory"
    }
};
preLocalize("skills", { key: "label", sort: true });

/**
 * Character alignment options.
 * @enum {string}
 */
PSYS.alignments = {
    lg: "PSYS.AlignmentLG",
    ng: "PSYS.AlignmentNG",
    cg: "PSYS.AlignmentCG",
    ln: "PSYS.AlignmentLN",
    tn: "PSYS.AlignmentTN",
    cn: "PSYS.AlignmentCN",
    le: "PSYS.AlignmentLE",
    ne: "PSYS.AlignmentNE",
    ce: "PSYS.AlignmentCE"
  };
  preLocalize("alignments");

/* -------------------------------------------- */
/*  Canvas                                      */
/* -------------------------------------------- */

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars.
 * @enum {number}
 */
DND5E.tokenHPColors = {
    damage: 0xFF0000,
    healing: 0x00FF00,
    temp: 0x66CCFF,
    tempmax: 0x440066,
    negmax: 0x550000
  };
  
  /* -------------------------------------------- */
  
  /**
   * Colors used when a dynamic token ring effects.
   * @enum {number}
   */
  DND5E.tokenRingColors = {
    damage: 0xFF0000,
    defeated: 0x000000,
    healing: 0x00FF00,
    temp: 0x33AAFF
  };
  
  /* -------------------------------------------- */
  
  /**
   * Settings used to render map location markers on the canvas.
   * @type {object}
   */
  DND5E.mapLocationMarker = {
    default: {
      backgroundColor: 0xFBF8F5,
      borderColor: 0x000000,
      borderHoverColor: 0xFF5500,
      font: null,
      textColor: 0x000000
    }
  };

  /* -------------------------------------------- */

/**
 * @typedef {object} CurrencyConfiguration
 * @property {string} label         Localized label for the currency.
 * @property {string} abbreviation  Localized abbreviation for the currency.
 * @property {number} conversion    Number by which this currency should be multiplied to arrive at a standard value.
 */

/**
 * The valid currency denominations with localized labels, abbreviations, and conversions.
 * The conversion number defines how many of that currency are equal to one GP.
 * @enum {CurrencyConfiguration}
 */
DND5E.currencies = {
    pp: {
      label: "DND5E.CurrencyPP",
      abbreviation: "DND5E.CurrencyAbbrPP",
      conversion: 0.1
    },
    gp: {
      label: "DND5E.CurrencyGP",
      abbreviation: "DND5E.CurrencyAbbrGP",
      conversion: 1
    },
    ep: {
      label: "DND5E.CurrencyEP",
      abbreviation: "DND5E.CurrencyAbbrEP",
      conversion: 2
    },
    sp: {
      label: "DND5E.CurrencySP",
      abbreviation: "DND5E.CurrencyAbbrSP",
      conversion: 10
    },
    cp: {
      label: "DND5E.CurrencyCP",
      abbreviation: "DND5E.CurrencyAbbrCP",
      conversion: 100
    }
  };
  preLocalize("currencies", { keys: ["label", "abbreviation"] });

export default PSYS;