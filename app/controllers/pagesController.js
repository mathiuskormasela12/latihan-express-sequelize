// ===== Pages Controller
// import all modules

exports.home        = (req, res) => {
  const props = {
    title: 'Home'
  };

  res.render('index', props);
};