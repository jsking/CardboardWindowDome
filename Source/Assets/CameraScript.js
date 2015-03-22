#pragma strict

var hit : RaycastHit;
var go : GameObject;
var theMat : Material;
var foundIt = false;

function Start () {

}

function Update () {
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "TitleBar") {
		foundIt = true;
		go = hit.collider.gameObject;
		theMat.color = Color.green;
		if((Input.touchCount == 1 || Input.GetMouseButton(0))) {
			go.GetComponentInParent(MoveWindow).move = true;
		}
	} else if(!foundIt) {
		theMat.color = Color.white;
	}
	if(foundIt) {
		if(Input.touchCount == 0) {
			go.GetComponentInParent(MoveWindow).move = false;
			foundIt = false;
		}
	}
}