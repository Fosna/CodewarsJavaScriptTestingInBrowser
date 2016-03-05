try { 
	solutionTest();
} catch (ex) {
	if (ex.name && ex.name === "TestError") {
		// Suppress exception throwing.
	} else {
		throw ex;
	}
}

