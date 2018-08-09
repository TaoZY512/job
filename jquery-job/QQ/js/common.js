let loadingHtml = (keyword,response) => {
    switch(keyword){
        case "ostranger" :{
            let datas = response["stranger"];
            let htmlStr = '';
            datas.forEach((data,index) => {
                htmlStr += `
               
                <li>
                    <section class="one">
                         <img class="img" src="${data.img}">
                    </section>
                    <section class="two">
                        <p>${data.name}</p>
                        <p>${data.person}</p>
                    </section>
                </li>
               
                `
            })
            $(".ostranger").html(htmlStr)
        } break;
        case "okinsfolk" :{
            let datas = response["kinsfolk"];
            let htmlStr = '';
            datas.forEach((data,index) => {
                htmlStr += `
                
                <li>
                    <section class="one">
                    <img class="img" src="${data.img}">
                    </section>
                    <section class="two">
                        <p>${data.name}</p>
                        <p>${data.person}</p>
                    </section>
                </li>
               
                `
            })
            $(".okinsfolk").html(htmlStr)
        } break;
        case "oschoolmate" :{
            let datas = response["schoolmate"];
            let htmlStr = '';
            datas.forEach((data,index) => {
                htmlStr += `
               
                <li>
                    <section class="one">
                    <img class="img" src="${data.img}"></section>
                    <section class="two">
                        <p>${data.name}</p>
                        <p>${data.person}</p>
                    </section>
                </li>
               
                `
            })
            $(".oschoolmate").html(htmlStr)
        } break;
    }
}