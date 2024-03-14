class Catalog {
  constructor(elementCatalog) {
    this.elementCatalog = elementCatalog;
    this.catalogItems = [];
  };

  addCatalogItem(text, linkUrl) {
    const CatalogItem = document.createElement('li');
    
    
    const Catlink = document.createElement('a');
    Catlink.href = linkUrl;
    Catlink.textContent = text;

    CatalogItem.appendChild(Catlink);

    this.elementCatalog.appendChild(CatalogItem);
    this.catalogItems.push(CatalogItem);
  };
};


const CatalogElement1 = document.getElementById("catalogID1");
const catalog1 = new Catalog(CatalogElement1);

const dataInCatalog1 =[['Электрика и свет', "#"], 
                      ['Ручной инструмент', "#"],
                      ['Автотовары'       , "#"], 
                      ['Все для сада'     , "#"],
                      ['Офис и дом'       , "#"], 
                      ['Спорт и туризм'   , "#"],
                      ['Склад'            , "#"],
                      ['Клининг'          , "#"],
                      ['Отопление'        , "#"]];

dataInCatalog1.forEach(item => catalog1.addCatalogItem(...item));


const CatalogElement2 = document.getElementById("catalogID2");
const catalog2 = new Catalog(CatalogElement2);

const dataInCatalog2 = [['RYOBI' , "#"], 
                        ['AEG'   , "#"],
                        ['Empire', "#"], 
                        ['KEYANG', "#"],
                        ['SHTOK' , "#"]];

dataInCatalog2.forEach(item => catalog2.addCatalogItem(...item));
