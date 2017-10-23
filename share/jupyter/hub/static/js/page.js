// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

require(["jquery", "jhapi"], function ($, JHAPI) {
    "use strict";

    var base_url = window.jhdata.base_url;
    var user = window.jhdata.user;
    var api = new JHAPI(base_url);

    function stopServer() {
        api.stop_server(user, {
            success: function() {
                window.location.reload();
            }
        });
    }

    $("#stop").click(stopServer);
    $("#stop-in-navbar").click(stopServer);

});
