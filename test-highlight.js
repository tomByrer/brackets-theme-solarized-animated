// JS theme demo
function findSequence(goal) {
	function find(start, history) {
		if (start == goal)
			return history;
		else if (start > goal)
			return null;
		else
			return find(start + 5, "(" + history + " + 5)") ||
						 find(start * 3, "(" + history + " * 3)");
	}
	return str.replace( /\$\{([0-9]+)\}/g, function( match, $1 ) {
		return args[ $1 ] ? args[ $1 ].value || args[ $1 ].keypath : 'undefined';
	});
}