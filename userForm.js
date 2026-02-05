function userForm(req, res) {
    res.write(`
            <form action="/submit" method="post">
                <input type="text" name="name" placeholder="Enter Name">
                <input type="text" name="email" placeholder="Enter Email">
                <button>Submit</button>
            </form>
        `);
    res.end();
}
module.exports = userForm;