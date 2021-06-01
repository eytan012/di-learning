$(document).ready(()=>{
    $("button.btn.delete-recipe").click(function(){
        const id = $(this).data('id');
        const url = '/delete/'+ id;
        if (confirm('Delete Recipe?')){
            $.ajax({
                url: url,
                type:'DELETE',
                success: (result)=>{
                    console.log('Deleting Recipe....');
                    window.location.href='/';
                },
                error: (error)=>{
                    console.log('main.js error:',error)
                }
            });
        }
    });

    $("button.btn.edit-recipe").click(function(){
    $('#edit-form-name').val($(this).data('name'));
    $('#edit-form-ingredients').val($(this).data('ingredients'));
    $('#edit-form-directions').val($(this).data('directions'));
    $('#edit-form-id').val($(this).data('id'));
    });

});