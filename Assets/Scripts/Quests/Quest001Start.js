import UnityEngine.UI; // We need this to use the component in the TextBox

var TextBoxOnCheck : int = 0; // Checks if TextBox is on the screen
var MessageBox : GameObject; // Defines the message box as an object
var TextBox : GameObject; // Defines the text box as an object
var TextMessage : String; // The text we can change
var QuestBox : GameObject; // Defines the quest box
var QuestText : GameObject; // Defines the text in the Quest box
var QuestName : String; // the quest name we can change

var QuestItemToShow : GameObject;

function OnMouseDown () {
			if (TextBoxOnCheck == 0) {
			QuestItemToShow.SetActive(true);
				TextBoxOnCheck = 1; //Sets the variable to turn the box off
				MessageBox.SetActive(true); //Re-enables the box
				TextBox.GetComponent.<Text>().text = TextMessage; //changes the message
				QuestName = "Active Quest: 'お金はどこに落ちてる？'"; // change the quest name
				QuestText.GetComponent.<Text>().text = QuestName; // input the quest name
			}
				
			else {
				TextBoxOnCheck = 0;
				MessageBox.SetActive(false);
				TextMessage = "内田：いい返事期待してるよ！";
			}
}

function Update () {
	if (Input.GetButtonDown("Submit")) {
		if(TextBoxOnCheck == 1){
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;
			TextMessage = "内田：いい返事期待してるよ！";
	}

	}
	if (Input.GetButtonDown("Cancel")) {
		if(TextBoxOnCheck == 1){
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;
			TextMessage = "内田：いい返事期待してるよ！";
	}

	}
}


