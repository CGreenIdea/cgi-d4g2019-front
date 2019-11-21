export function submitLogin()
{
    let form = document.getElementById("loginForm");
    if(form.checkValidity())
    {
        form.submit();
    }
}
