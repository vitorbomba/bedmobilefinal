var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_promocoes"]', function (e) {
    firebase.database().ref('promocoes').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#l_promocoes").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Fabricante +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Descricao +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#l_promocoes").append(listHtml);
    
            
        })
    })
    
});
  