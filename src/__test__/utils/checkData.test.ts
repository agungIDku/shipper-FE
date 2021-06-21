import '@testing-library/react'
import { isJsonString } from '@/utils/checkData'

test("isJsonString function data correctly", () => {
  const jsonString = "{\"name\":\"agung\"}"
  expect(isJsonString(jsonString)).toBeTruthy()
})

test("isJsonString function data incorrectly", () => {
  const jsonString = ''
  expect(!!isJsonString(jsonString) === false).toBeTruthy()
})
