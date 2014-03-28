var editor = {
    canvas: null,
    context: null,
    values: [],
    side: 9,
    init: function(name) {
        editor.canvas = document.getElementById(name);
        editor.context = editor.canvas.getContext('2d');
    }
}