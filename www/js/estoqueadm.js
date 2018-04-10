var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtosadm"]', function (e) {
    firebase.database().ref('promocoes').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
                var listHtml = '<div class="row block block-strong">';
                listHtml += '<td class="label-cell col-20">'+item.key+'</td>';
                //listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Id +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Fabricante +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Descricao +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});

function apagarrr(){

	var apagarr = document.getElementById('excluirrr').value;

	apagarrdb(apagarr);
}

function apagarrdb(apagrr){

	return firebase.database().ref().child('promocoes').child(apagrr).remove();
}
  