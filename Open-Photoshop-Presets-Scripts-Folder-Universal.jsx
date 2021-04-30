/* Open Photoshop Presets: Scripts Folder - Universal */

#target photoshop

app.bringToFront();

openPresetsAndSettingsFolders();

function openPresetsAndSettingsFolders() {
    var os = $.os.toLowerCase().indexOf('mac') >= 0 ? "MAC" : "WINDOWS";
    if (os === 'MAC') {
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
