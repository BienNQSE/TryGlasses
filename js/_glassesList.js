export class GlassesList{
    constructor(){
        this.gList = [];

    }
    addGlasses(glasses){
        this.gList.push(glasses);
    }
    renderGlasses(){
        // các thẻ HTML chứa nội dung của các đối tượng kính
        let content = "";
        // Duyệt mảng để lấy nội dung
        content = this.gList.reduce((glContent,item,index)=>{
            glContent += `
                <div class="col-4">
                    <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
                </div>
            `;
            return glContent;
        },'');
        return content;
    }
}