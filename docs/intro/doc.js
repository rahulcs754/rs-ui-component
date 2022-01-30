// clipboard js init function
(function(){
    new Clipboard('.code');
})();


// toastr function
$(".code").click(function() {
	toastr.options.positionClass = "toast-top-right";
	toastr.success('&nbsp; &nbsp; Copied to the clipboard');
});