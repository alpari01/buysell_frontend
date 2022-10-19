<template>
  <div class="login mt-4">
    <div class="row">
      <div class="col-sm-3 mx-auto">
        <h1>Register</h1>
        <br>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="inputFirstName" placeholder="Enter first name" required>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="inputLastName" placeholder="Enter last name" required>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="inputNickname" placeholder="Enter nickname" required>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" required>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="inputPassword" placeholder="Enter password" required>
          </div>
          <div class="form-group">
            <input type="date" class="form-control" id="inputBirthdate" placeholder="Enter birthdate" required>
          </div>
          <div class="form-group" align="left">
            <input list="genders" name="gender" id="gender" placeholder="Choose your gender" required>
            <datalist id="genders">
              <option value="Male"></option>
              <option value="Female"></option>
              <option value="Bigender"></option>
              <option value="Binary"></option>
              <option value="Cis"></option>
              <option value="Cismale"></option>
              <option value="Cisfemale"></option>
              <option value="Cisman"></option>
              <option value="Ciswoman"></option>
              <option value="Demi-guy"></option>
              <option value="Demi-girl"></option>
              <option value="Female to male"></option>
              <option value="Male to female"></option>
              <option value="FTM"></option>
              <option value="MTF"></option>
              <option value="Genderfluid"></option>
              <option value="Intergender"></option>
              <option value="Multigender"></option>
              <option value="Maverique"></option>
              <option value="Neurogender"></option>
              <option value="Non-binary"></option>
              <option value="Other"></option>
              <option value="Pangender"></option>
              <option value="Trans"></option>
              <option value="Transgender"></option>
              <option value="Trans male"></option>
              <option value="Trans female"></option>
              <option value="Trans person"></option>
              <option value="Transsexual"></option>
              <option value="Trigender"></option>
              <option value="Two spirit"></option>
              <option value="Attack helicopter"></option>
            </datalist>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Create account</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>