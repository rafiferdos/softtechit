jQuery(document).ready(function () {
    jQuery(".chele").draggable({
        'cursor': 'move',
        'containment': '.baba'
    });
    jQuery(function () {
        jQuery("#draggable").draggable();
        jQuery("#droppable").droppable({
            drop: function (event, ui) {
                jQuery(this)
                    .addClass("ui-state-highlight")
                    .find("p")
                    .html("Dropped!");
            }
        });
    });
    jQuery(function () {
        jQuery(".resizeable").resizeable();
    });

    jQuery(function () {
        jQuery("#selectable").selectable();
    });

    jQuery(function () {
        jQuery("#sortable").sortable();
        jQuery("#sortable").disableSelection();
    });
    jQuery(function () {
        jQuery(".accordion").accordion();
    });
    jQuery(function () {
        jQuery(".input").autocomplete({
            'source': ['ami', 'apni', 'apon', 'apnara']
        });
    });

    $(function () {
        $(".widget input[type=submit], .widget a, .widget button").button();
        $("button, input, a").click(function (event) {
            event.preventDefault();
        });
    });

    $(function () {
        $("input").checkboxradio();
    });

    $(function () {
        $("#datepicker").datepicker();
        $("#anim").on("change", function () {
            $("#datepicker").datepicker("option", "showAnim", $(this).val());
        });
    });

    $(function () {
        var progressTimer,
            progressbar = $("#progressbar"),
            progressLabel = $(".progress-label"),
            dialogButtons = [{
                text: "Cancel Download",
                click: closeDownload
            }],
            dialog = $("#dialog").dialog({
                autoOpen: false,
                closeOnEscape: false,
                resizable: false,
                buttons: dialogButtons,
                open: function () {
                    progressTimer = setTimeout(progress, 2000);
                },
                beforeClose: function () {
                    downloadButton.button("option", {
                        disabled: false,
                        label: "Start Download"
                    });
                }
            }),
            downloadButton = $("#downloadButton")
            .button()
            .on("click", function () {
                $(this).button("option", {
                    disabled: true,
                    label: "Downloading..."
                });
                dialog.dialog("open");
            });

        progressbar.progressbar({
            value: false,
            change: function () {
                progressLabel.text("Current Progress: " + progressbar.progressbar("value") + "%");
            },
            complete: function () {
                progressLabel.text("Complete!");
                dialog.dialog("option", "buttons", [{
                    text: "Close",
                    click: closeDownload
                }]);
                $(".ui-dialog button").last().trigger("focus");
            }
        });

        function progress() {
            var val = progressbar.progressbar("value") || 0;

            progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

            if (val <= 99) {
                progressTimer = setTimeout(progress, 50);
            }
        }

        function closeDownload() {
            clearTimeout(progressTimer);
            dialog
                .dialog("option", "buttons", dialogButtons)
                .dialog("close");
            progressbar.progressbar("value", false);
            progressLabel
                .text("Starting download...");
            downloadButton.trigger("focus");
        }
    });
    
    $( function() {
        $( "#menu" ).menu();
    } );
});