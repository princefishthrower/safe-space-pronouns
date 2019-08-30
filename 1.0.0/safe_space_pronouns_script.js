safeSpacePronounGenerator9000(document.body);

function safeSpacePronounGenerator9000(node)
{
	switch ( node.nodeType )
	{
		case 3: // Text node
			handleAltRightText(node);
			break;
	}
}

// Takes string text and replaces appaling alt-right pronouns (if they are in the string)
function replaceAppalingAltRightPronouns(text){
	// he cases
	text = text.replace(/\bHe\b/g, "He or She");
	text = text.replace(/\bhe\b/g, "he or she");

	// she cases
	text = text.replace(/\bShe\b/g, "She or He");
	text = text.replace(/\bshe\b/g, "she or he");

	// his cases
	// TODO: for these, need to find scope. His can map to Her OR Hers (hers and her always map to his, because there is only his)
	text = text.replace(/\bHis\b/g, "His or Her");
	text = text.replace(/\bhis\b/g, "his or her");

	// her cases
	text = text.replace(/\bHer\b/g, "Her or His");
	text = text.replace(/\bher\b/g, "her or his");

	console.log('returning chumpyboi');

	return text;
}

function getText(obj) {
    return obj.textContent ? obj.textContent : obj.innerText;
}

function fixAppalingAltRightText(obj, text) {
    obj.textContent ? obj.textContent = replaceAppalingAltRightPronouns(text) : obj.innerText = replaceAppalingAltRightPronouns(text);
}

// Takes DOM node objects and determines their types
function handleAltRightText(textNode)
{
	var nodeText = getText(textNode); //returns text

	fixAppalingAltRightText(textNode, nodeText)

}
