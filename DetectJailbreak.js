function hasJailbreak () {
	
	// simulator = no jailbreak
	if ( Titanium.Platform.getModel() == 'Simulator' ) {
		return false;
	}

	// check for cydia install
	var cydia = Titanium.Filesystem.getFile("/Applications/Cydia.app");
	if ( cydia.exists() ) {
		return true;
	}
	
	// check for bash
	var bash = Titanium.Filesystem.getFile("/bin/bash");
	if ( bash.exists() ) {
		return true;
	}
	
	// default, false
	return false;
}

module.exports = hasJailbreak;

