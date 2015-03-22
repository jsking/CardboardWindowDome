#pragma strict

var move = false;
var hitDist = 0f;

function Start () {

}

function Update () {
	try {
		hitDist = Vector3.Distance(Vector3.zero, GameObject.FindGameObjectWithTag("Player").GetComponent(CameraScript).hit.point);
	} catch (err) {
		Debug.LogError(err);
	}
	if(move) {
		transform.LookAt(GameObject.FindGameObjectWithTag("Player").GetComponent(CameraScript).transform.forward * hitDist);
	}
}