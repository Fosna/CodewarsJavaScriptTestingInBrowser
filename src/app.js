try { 
	main();
} catch (ex) {

}

function main() {
	Test.assertEquals(1, 1, "One should equal one.");
	//Test.assertEquals(1, 2);
	//Test.assertEquals(1, 2, "I tought 1 equals 2, but it doesn't. Huh, ha..."); 

	//Test.assertNotEquals(1, 1);
	Test.assertNotEquals(1, 2);

	tryDescribe();
}

function tryDescribe() {
	Test.describe("description", function() {
	    var a = 5;
	    console.log("describe body");
	    console.log("a", a);
	    
	    Test.before(function () {
	        console.log("before");
	        console.log("a", a);
	        a = -5;
	        console.log("a", a);
	    }
	    );

	    Test.it("ition", function() {
	        console.log("it body");
	    }
	    );
	    
	    Test.it("ition beta", function() {
	        console.log("it beta body");
	    }
	    );
	}
	);

	Test.describe("green description", function () {
	    console.log("hi form green description body");

	    Test.it("green it", function() {
	        console.log("hi form green it body");
	    });
	});
}