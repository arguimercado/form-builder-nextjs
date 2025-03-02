
type FormModel = {
   id: number
   name: string
   description?: string | null
   type: string
   isActive: boolean
   createdAt: Date
   author?: string
   published: boolean
   content: string
   visits: number
   submissions: number
   userId: string
}

type FormTypeModel = {
   id: string
   name: string
}