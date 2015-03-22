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
		if((Input.touchCount == 1 || Input.GetMouseButton(0))) {
			go.GetComponentInParent(MoveWindow).move = true;
		} else {
			theMat.color = Color.green;
		}
	} else if(Input.touchCount != 1 && !Input.GetMouseButton(0)) {
		go.GetComponentInParent(MoveWindow).move = false;
	} else {
		foundIt = false;
		theMat.color = Color.white;
	}
}