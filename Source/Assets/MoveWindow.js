#pragma strict

var move = false;

function Start () {

}

function Update () {
	if(move) {
		transform.rotation = GameObject.FindGameObjectWithTag("Player").transform.rotation;
	}
}