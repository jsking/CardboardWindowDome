#pragma strict

var hit : RaycastHit;
var go : GameObject;
var theMat : Material;

function Start () {

}

function Update () {
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "TitleBar" && Input.touchCount == 1) {
		hit.collider.gameObject.GetComponentInParent(MoveWindow).move = true;
		theMat.color = Color.green;
		go = hit.collider.gameObject;
	} else {
		hit.collider.gameObject.GetComponentInParent(MoveWindow).move = false;
		theMat.color = Color.white;
	}
}