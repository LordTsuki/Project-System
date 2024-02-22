import { Infini8 } from "./module/config.mjs";

import Infini8ActorSheet from "./module/sheets/infini8ActorSheet.mjs";
import Infini8ItemSheet from "./module/sheets/infini8ItemSheet.mjs";

Hooks.once("init", function () {
    console.log("infini8 | Initialising Infini8 System");

    CONFIG.Infini8 = Infini8;

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("infini8", Infini8ItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet)
    Actors.registerSheet("infini8", Infini8ActorSheet, { makeDefault: true});
});