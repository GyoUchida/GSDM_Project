import UnityEngine.UI; // We need this to use the component in the TextBox

var TextBoxOnCheck : int = 0; // Checks if TextBox is on the screen
var MessageBox : GameObject; // Defines the message box as an object
var TextBox : GameObject; // Defines the text box as an object
var QuestBox : GameObject; // Defines the quest box
var QuestText : GameObject; // Defines the text in the Quest box
var QuestName : String; // the quest name we can change



function OnMouseDown () {
			if (TextBoxOnCheck == 0) {
				TextBoxOnCheck = 1; //Sets the variable to turn the box off
				MessageBox.SetActive(true); //Re-enables the box
				TextBox.GetComponent.<Text>().text = "Villager: Thank you very much."; //changes the message
				QuestText.GetComponent.<Text>().text = "Active Quest: None"; 
			}
				
			else {
				TextBoxOnCheck = 0;
				MessageBox.SetActive(false);
				//TextMessage = "Villager: Get going then!";"
			}
}

function Update () {
	if (Input.GetButtonDown("Submit")) {
		if(TextBoxOnCheck == 1){
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;
	}

	}
	if (Input.GetButtonDown("Cancel")) {
		if(TextBoxOnCheck == 1){
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;
		
	}

	}
}


