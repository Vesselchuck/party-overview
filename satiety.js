export class food_and_water extends FormApplication {
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["dnd5e","tidy5e"], //тут не уверен
        title: "Название окна",
        template: "modules/party-overview/templates/parts/satiety_table.html",
        id: "satiety_table",
        width: 600, // ширина в пиксилях
        height: "auto", //высота
      });
    }
    getData(){
    console.log(this)
    }
    activateListeners(html){
    }
    _updateObject(event, formData){
    }
  }