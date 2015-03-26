#pragma strict

var hit : RaycastHit;
var go : GameObject;
var theMat : Material;
var foundIt = false;
var curColorPicker : GameObject;
var colorPickerRenderers : MeshRenderer[];
var ColorRenderTex : RenderTexture;
var colorPickerCurColor : Color;
var crosshairs : Transform;
var cardboard : Cardboard;

function Start () {

}

function Update () {
	cardboard = (transform.parent.GetComponent(Cardboard) as Cardboard);
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
	
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "CloseButton" && cardboard.CardboardTriggered) {
		Destroy(hit.collider.transform.parent.gameObject);
	}
	
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "ColorField" && cardboard.CardboardTriggered) {
		for(var cpr : MeshRenderer in colorPickerRenderers) {
			cpr.enabled = true;
			try {
				cpr.GetComponent.<Collider>().enabled = true;
			} catch(err) {
				
			}
			try {
				cpr.transform.parent.GetComponent.<Collider>().enabled = true;
			} catch(err) {
				
			}
		}
		curColorPicker = hit.collider.gameObject;
	}
	
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "ColorPicker" && cardboard.CardboardTriggered) {
		crosshairs.rotation = transform.rotation;
		var tex = new Texture2D(512, 512, TextureFormat.RGB24, false);
 		RenderTexture.active = ColorRenderTex;
 		tex.ReadPixels(new Rect(128, 128, 384, 384), 0, 0);
		RenderTexture.active = null;
		colorPickerCurColor = tex.GetPixel(120, 120);
	}
	
	if(Physics.Raycast(Vector3.zero, transform.forward, hit) && hit.collider.tag == "ColorPickerOK" && cardboard.CardboardTriggered) {
		for(var cpr : MeshRenderer in colorPickerRenderers) {
			cpr.enabled = false;
			try {
				cpr.GetComponent.<Collider>().enabled = false;
			} catch(err) {
				
			}
			try {
				cpr.transform.parent.GetComponent.<Collider>().enabled = false;
			} catch(err) {
				
			}
		}
		(curColorPicker.GetComponent(MaterialPicker) as MaterialPicker).colorPickerChangeMat.color = colorPickerCurColor;
	}
}