Given(/^the program has finished$/) do
  @cucumber = `npm test`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  expect(lines.length).to eq(5)

  expect(lines[-1]).to match(%r(^@[0-9]{3}\.[0-9]{2}$))
end
