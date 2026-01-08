'use client'

import { useState } from 'react'
import { BookingFlow } from './BookingFlow'
import { CloudbedsIntegration } from './CloudbedsIntegration'
import { useTranslations } from 'next-intl'

export function BookingTabs() {
  const t = useTranslations('bookingTabs')
  const [activeTab, setActiveTab] = useState<'cloudbeds' | 'manual'>('cloudbeds')

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('cloudbeds')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'cloudbeds'
                ? 'bg-white text-verde-selva shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('cloudbeds')}
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'manual'
                ? 'bg-white text-verde-selva shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('manual')}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'cloudbeds' && <CloudbedsIntegration />}
        {activeTab === 'manual' && <BookingFlow />}
      </div>
    </div>
  )
}
