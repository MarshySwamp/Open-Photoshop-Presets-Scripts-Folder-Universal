/* Open Photoshop Presets: Scripts Folder - Universal */

#target photoshop

app.bringToFront();

openPresetsAndSettingsFolders();

function openPresetsAndSettingsFolders() {
    var os = $.os.toLowerCase().indexOf('mac') >= 0 ? "mac" : "windows";
    if (os === 'mac') {
        // alert("It's a Mac!");
        appPresets();

    } else {
        // alert("It's Windows!");
        appPresets();

    }

    function appPresets() {
        var scriptsDir = app.path.fsName + '/' + 'Presets/Scripts/';
        var scriptsDirOpen = Folder(scriptsDir);
        scriptsDirOpen.execute();
    }
}
