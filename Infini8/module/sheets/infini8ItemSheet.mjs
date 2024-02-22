export default class Infini8ItemSheet extends ItemSheet {
    get template() {
        return `systems/Infini8/templates/sheets/${this.item.type}-sheet.hbs`;
    }
}