function loginUI(){
	return '<div id="login_form">'
	+'  <div class="container">'
	+'    <label for="uname"><b>Username</b></label>'
	+'    <input type="text" placeholder="Enter Username" name="uname" required>'
	+''
	+'    <label for="psw"><b>Password</b></label>'
	+'    <input type="password" placeholder="Enter Password" name="psw" required>'
	+''
	+'    <button type="submit" id="login_submit_btn" class="login_submit_btn" >Login</button>'
	+'    <label>'
	+'      <input type="checkbox" checked="checked" name="remember"> Remember me'
	+'    </label>'
	+'  </div>'
	+''

	+'    <button type="button" id="login_cancle_btn" class="login_cancle_btn" >Cancel</button>'
	+'    <span class="psw">Forgot <a href="#">password?</a></span>'
	
	+'</div> '
}