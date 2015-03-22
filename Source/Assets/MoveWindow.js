#pragma strict

var move = false;

function Start () {

}

function Update () {
	if(move) {
		transform.LookAt(GameObject.FindGameObjectWithTag("Player").GetComponent(CameraScript).hit.point);
	}
}