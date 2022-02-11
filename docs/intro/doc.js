// clipboard js init function
(function(){
    new Clipboard('.code');
})();


// toastr function
$(".code").click(function() {
	toastr.options.positionClass = "toast-top-right";
	toastr.success('&nbsp; &nbsp; Copied to the clipboard');
});

$(".code-simple").click(function() {
	toastr.options.positionClass = "toast-top-right";
	toastr.success('&nbsp; &nbsp; Copied to the clipboard');
});


const codeBlocks = document.querySelectorAll("pre code");
    codeBlocks.forEach((codeBlock) => {
        let code = codeBlock.innerHTML;
        code = code.replaceAll("<", "&LT");
        codeBlock.innerHTML = code;
    });