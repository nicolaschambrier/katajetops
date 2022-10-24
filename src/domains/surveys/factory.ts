import { NpsAdapterMemory } from './adapters/NpsAdapterMemory'
import { NpsRepository } from './repositories/NpsRepository'
import { NpsService } from './services/NpsService'

const memoryAdapter = new NpsAdapterMemory()
const npsRepository = new NpsRepository(memoryAdapter)
const npsService = new NpsService(npsRepository)

export const npsServiceFactory = () => npsService
