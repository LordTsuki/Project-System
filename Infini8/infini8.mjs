import Infini8ItemSheet from "./module/sheets/infini8ItemSheet.mjs";

Hooks.once("init", function () {
    console.log("infini8 | Initialising Infini8 System");

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("infini8", Infini8ItemSheet, { makeDefault: true });
});