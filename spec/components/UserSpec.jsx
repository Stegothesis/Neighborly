describe('User', function() {

  it('User should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(User)).to.be.false;
  });

});