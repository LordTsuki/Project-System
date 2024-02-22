export default class Infini8ItemSheet extends ItemSheet {
    get template() {
        return `systems/Infini8/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.Infini8
        }

        return sheetData;
    }
}