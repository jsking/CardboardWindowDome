#pragma strict

var hit : RaycastHit;
var go : GameObject;
var theMat : Material;
var foundIt = false;

function Start () {

}

function Update () {
	var cardboard = (transform.parent.GetComponent(Cardboard) as Cardboard);
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "TitleBar") {
		go = hit.collider.gameObject;
		theMat.color = Color.green;
		if(cardboard.CardboardTriggered) {
			foundIt = !foundIt;
			go.GetComponentInParent(MoveWindow).move = !go.GetComponentInParent(MoveWindow).move;
		}
	} else {
		theMat.color = Color.white;
	}
	
}