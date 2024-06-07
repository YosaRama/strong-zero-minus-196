'use client'

import { useEffect, useState } from 'react'
import s from './index.module.scss'
import { checkAge } from '@/utils/age-gate-checker'
import { useForm } from 'react-hook-form'
import { AgeGateData } from '@/models/age-gate'
import moment from 'moment'
import Image from 'next/image'

export default function AgeGateContent() {
  const [allowed, setAllowed] = useState<boolean>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [age, setAge] = useState<string>()

  useEffect(() => {
    setAge(localStorage.getItem('szm-user-date-of-birth') || 'null')
  }, [age])

  useEffect(() => {
    if (age) {
      const checkAgeResult = checkAge(age)
      setAllowed(checkAgeResult)
    }
  }, [age])

  useEffect(() => {
    if (!allowed) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [allowed])

  const {
    register,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<AgeGateData>()

  const onSubmit = (value: AgeGateData) => {
    const dateOfBirth = `${value.day}-${value.month}-${value.year}`
    const isLegal = checkAge(dateOfBirth)

    if (!isLegal) {
      setErrorMessage(
        'Sorry, you must be at least 18 years old to access this site. Redirecting...',
      )

      setTimeout(() => {
        window.location.href = 'https://www.responsibility.org/'
      }, 3000)

      return
    }

    window.localStorage.setItem('szm-user-date-of-birth', dateOfBirth)
    setAge(dateOfBirth)
  }

  return (
    <>
      {!allowed && age && (
        <section className={`${s.container} flex align-center justify-center`}>
          <Image
            src="/assets/images/logo-black.png"
            width={177}
            height={133}
            className={s.logo}
            alt="Strong Zero Minus 196"
          />
          <div className="text-center flex items-center">
            <div className="h-fit">
              <div>
                <h2 className={`${s.heading} mb-5 lg:mb-6`}>
                  DISCOVER EXTREME REFRESHMENT
                </h2>
                <p
                  className={`${s.subheading} mb-5 lg:mb-6 mx-auto`}
                  style={{ maxWidth: '293px' }}
                >
                  Irasshaimase, welcome to MINUS 196 SEA. We&apos;re pumped to
                  have you here!
                </p>
                <p className={`${s.subheading} mb-5 lg:mb-11`}>
                  First, some quick verification, please:
                </p>
              </div>

              <div>
                <p className={`${s.label} mb-3 lg:mb-4`}>DATE OF BIRTH</p>
                <div
                  className="flex gap-2 justify-center mx-auto"
                  style={{ maxWidth: '320px' }}
                >
                  <div>
                    <input
                      className={`${s.input} w-[75px] lg:w-[88px]`}
                      placeholder="DD"
                      {...register('day', {
                        required: {
                          message: 'Date field is required',
                          value: true,
                        },
                        maxLength: {
                          message: 'Invalid date',
                          value: 2,
                        },
                        max: {
                          message: 'Invalid date',
                          value: 31,
                        },
                        min: {
                          message: 'Invalid date',
                          value: 1,
                        },
                      })}
                    />
                    <p className={s.error}>{formError.day?.message}</p>
                  </div>
                  <div>
                    <input
                      className={`${s.input} w-[75px] lg:w-[88px]`}
                      placeholder="MM"
                      {...register('month', {
                        required: {
                          message: 'Month field is required',
                          value: true,
                        },
                        maxLength: {
                          message: 'Invalid month',
                          value: 2,
                        },
                        max: {
                          message: 'Invalid month',
                          value: 12,
                        },
                        min: {
                          message: 'Invalid month',
                          value: 1,
                        },
                      })}
                    />
                    <p className={s.error}>{formError.month?.message}</p>
                  </div>

                  <div>
                    <input
                      className={`${s.input} w-[100px] lg:w-[120px]`}
                      placeholder="YYYY"
                      {...register('year', {
                        required: {
                          message: 'Year field is required',
                          value: true,
                        },
                        maxLength: {
                          message: 'Invalid year',
                          value: 4,
                        },
                        max: {
                          message: 'Invalid year',
                          value: moment().year(),
                        },
                      })}
                    />
                    <p className={s.error}>{formError.year?.message}</p>
                  </div>
                </div>
                <div className="mt-5 lg:mt-6">
                  <input
                    type="checkbox"
                    id="remember"
                    {...register('remember_me')}
                  />
                  <label className="pl-2" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>

              {errorMessage && (
                <div className="text-[#B73339]">{errorMessage}</div>
              )}

              <div className="my-5 lg:my-9">
                <button
                  className="text-white text-xl bg-[#B73339] px-[42px] py-[16px] font-bold"
                  onClick={handleSubmit(onSubmit)}
                >
                  ENTER
                </button>
              </div>

              <div className={s.link_tos}>
                <p className="mt-9">
                  By entering, you agree to our <a href="#">Terms of Use</a>,{' '}
                  <a href="#">Privacy Policy</a> and{' '}
                  <a href="#">Cookie Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
