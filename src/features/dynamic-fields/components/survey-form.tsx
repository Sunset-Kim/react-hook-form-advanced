import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Checkbox,
  Chip,
  JsonInput,
  NumberInput,
  Select,
  Stack,
  TextInput
} from '@mantine/core'
import { useCounter } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

enum PetType {
  Dog = 'dog',
  Cat = 'cat',
  Other = 'other'
}

const SurveySchema = z
  .object({
    hasPet: z.boolean(),
    petName: z.string().optional(),
    petType: z.nativeEnum(PetType).optional(),
    petAge: z.number().positive().optional(),
    willAdopt: z.boolean(),
    preferredPet: z.nativeEnum(PetType).optional()
  })
  .refine(
    data => {
      if (data.hasPet) {
        console.log(data)
        return data.petName !== undefined && data.petType !== undefined
      }
      return true
    },
    {
      message: '애완동물을 가지고 있을 때는 이름과 종류를 입력해주세요',
      path: ['petName', 'petType']
    }
  )
  .refine(
    data => {
      if (data.willAdopt) {
        return data.preferredPet !== undefined
      }
      return true
    },
    {
      message: '애완동물을 입양할 때는 선호하는 종류를 선택해주세요',
      path: ['preferredPet']
    }
  )

export type Survey = z.infer<typeof SurveySchema>

export const SurveyForm: React.FC = () => {
  const [counter, { increment }] = useCounter()
  const [json, setJson] = useState<string>('')
  const { register, watch, handleSubmit, unregister, control } =
    useForm<Survey>({
      resolver: zodResolver(SurveySchema)
    })

  const hasPet = watch('hasPet')
  const willAdopt = watch('willAdopt')

  const onSubmit = (data: Survey) => {
    setJson(JSON.stringify(data, null, 2))
    increment()
  }

  useEffect(() => {
    if (hasPet !== true) {
      unregister(['petName', 'petType', 'petAge'])
    }
  }, [hasPet])

  useEffect(() => {
    if (willAdopt !== true) {
      unregister('preferredPet')
    }
  }, [willAdopt])

  return (
    <Stack>
      <Chip>Render: {counter}</Chip>
      <form onSubmit={handleSubmit(onSubmit, console.log)}>
        <Stack>
          <Checkbox {...register('hasPet')} label="애완동물을 가지고 있나요?" />

          {
            // Show pet fields if user has a pet
            hasPet === true && (
              <>
                <TextInput {...register('petName')} label={'애완동물 이름'} />
                <Controller
                  name="petType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      data={Object.values(PetType)}
                      {...field}
                      label="애완동물 종류"
                    />
                  )}
                />
                <Controller
                  name="petAge"
                  control={control}
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      label="애완동물 나이"
                      min={0}
                      max={30}
                      allowNegative={false}
                    />
                  )}
                />
              </>
            )
          }
          {
            // Show adoption fields if user does not have a pet
            hasPet !== true && (
              <Checkbox
                {...register('willAdopt')}
                label="애완동물을 입양하시겠어요?"
              />
            )
          }
          {willAdopt === true && (
            <Controller
              name="preferredPet"
              control={control}
              render={({ field }) => (
                <Select
                  data={Object.values(PetType)}
                  {...field}
                  label="선호하는 애완동물 종류"
                />
              )}
            />
          )}

          <Button type="submit">제출하기</Button>
        </Stack>
      </form>
      <Box h={400}>
        <JsonInput h={'100%'} readOnly value={json} minRows={4} autosize />
      </Box>
    </Stack>
  )
}
